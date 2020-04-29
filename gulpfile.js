'use strict';

// Common packages
const gulp = require('gulp');
const debug = require('gulp-debug');
const rename = require('gulp-rename');
const { parallel, series, src, dest, task, watch } = require('gulp');

// For serve
const browsersync = require('browser-sync');

// For styles 
const sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'), // Формирует вывод об ошибке, при этом работа Gulp не прерывается
    mincss = require('gulp-clean-css');

// For views
const include = require('gulp-file-include');

// For images
const imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminZopfli = require( 'imagemin-zopfli' ),
    imageminMozjpeg = require('imagemin-mozjpeg');

// For sprites
const svg = require('gulp-svg-sprite');

// For webp
const imageminWebp =  require('imagemin-webp'),
    webp = require('gulp-webp');

// For scripts
const webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config');

const paths = {
    views: {
        src: [
            './src/views/**/*.html',
            './src/views/pages/*.html'
        ],
        dist: './dist/',
        watch: [
            './src/blocks/**/*.html',
            './src/views/**/*.html'
        ]
    },
    styles: {
        src: './src/styles/main.{scss,sass}',
        dist: './dist/styles/',
        watch: [
            './src/blocks/**/*.{scss,sass}',
            './src/styles/**/*.{scss,sass}'
        ]
    },
    images: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: "./dist/img/",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
    },
    sprites: {
        src: "./src/img/svg/*.svg",
        dist: "./dist/img/sprites/",
        watch: "./src/img/svg/*.svg"
    },
    webp: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,tiff}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: "./dist/img/",
        watch: [
            "./src/img/**/*.{jpg,jpeg,png,tiff}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ]
    },
    scripts: {
        src: "./src/js/index.js",
        dist: "./dist/js/",
        watch: [
            "./src/blocks/**/*.js",
            "./src/js/**/*.js"
        ]
    },
    fonts: {
        src: "./src/fonts/**/*.{woff,woff2}",
        dist: "./dist/fonts/",
        watch: "./src/fonts/**/*.{woff,woff2}"
    }
};

// For styles 
task('styles', () => {
    return src(paths.styles.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(mincss())
        .pipe(dest(paths.styles.dist))
        .pipe(browsersync.stream());
});

// For views
task('views', () => {
    return gulp.src(paths.views.src)
    .pipe(include({
        prefix: "@@",
        basepath: "@file"
    }))
    .pipe(dest(paths.views.dist))
    .pipe(browsersync.stream());
});

// For serve
task('serve',  () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    })

    watch(paths.views.watch, parallel('views'));
    watch(paths.styles.watch, parallel('styles'));
    watch(paths.scripts.watch, parallel('scripts'));
    watch(paths.sprites.watch, parallel('sprites'));
    watch(paths.images.watch, parallel('images'));
    watch(paths.webp.watch, parallel('webp'));
    watch(paths.fonts.watch, parallel('fonts'));
});

// For images
task('images', () => {
    return src(paths.images.src)
        .pipe(imagemin([
            imageminPngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),
            imageminZopfli({
                more: true
            }),
            imageminMozjpeg({
                progressive: true,
                quality: 80
            }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ]))
        .pipe(dest(paths.images.dist))
        .pipe(debug({
            'title': 'Images'
        }))
        .on('end', browsersync.reload);
});

// For sprites
task('sprites', () => {
    return src(paths.sprites.src)
        .pipe(svg({
            shape: {
                dest: 'intermediate-svg'
            },
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest(paths.sprites.dist))
        .pipe(debug({
            'title': 'Sprites'
        }))
        .on('end', browsersync.reload);
});

// For webp
task('webp', () => {
    return src(paths.webp.src)
        .pipe(webp(imageminWebp({
            lossless: true,
            quality: 100,
            alphaQuality: 100
        })))
        .pipe(dest(paths.webp.dist))
        .pipe(debug({
            'title': 'Images'
        }))
        .on('end', browsersync.reload);
});

//For scripts
webpackConfig.mode = 'development';
webpackConfig.devtool = 'source-map';

task('scripts', () => {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(dest(paths.scripts.dist))
        .pipe(debug({
            'title': 'JS files'
        }))
        .on('end', browsersync.reload);
});

// For fonts 
task('fonts', () => {
    return src(paths.fonts.src)
        .pipe(dest(paths.fonts.dist))
        .pipe(debug({
            'title': 'Fonts'
        }));
});

exports.dev = series(
        parallel(['views', 'styles', 'scripts', 'images', 'sprites', 'webp', 'fonts']),
        parallel('serve')
);

