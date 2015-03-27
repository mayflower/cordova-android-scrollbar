/*
 * Copyright 2015 Christian Speckner
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.initConfig({
        ts: {
            plugin: {
                src: [
                    'ts/plugin.ts'
                ]
            },
            options: {
                target: 'es5',
                module: 'commonjs',
                declaration: false,
                sourceMap: false,
                removeComments: true,
                noImplicitAny: true
            }
        },

        browserify: {
            plugin: {
                dest: 'www/androidscrollbar.js',
                src: ['ts/plugin.js'],
                options: {
                    browserifyOptions: {
                        standalone: 'AndroidScrollbar'
                    }
                }
            }
        },

        clean: {
            plugin: [
                'ts/**/*.js',
                'www/plugin.js',
                '.tscache'
            ]
        },

        watch: {
            ts: {
                files: ['ts/**/*.ts'],
                tasks: 'ts'
            },
            browserify: {
                files: ['ts/plugin.js'],
                tasks: 'browserify'
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                success: true
            }
        }
    });

    grunt.registerTask('default', ['clean', 'ts', 'browserify']);
    grunt.task.run('notify_hooks');
};
