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

/// <reference path="./interface/typescript_deferred.d.ts"/>
/// <reference path="./interface/cordova.d.ts"/>

import tsd = require('typescript-deferred');

export function toggleVerticalScrollbarVisibility(visibility: boolean): tsd.PromiseInterface<void> {
    var deferred = tsd.create<void>();

    if (cordova.platformId.toLowerCase() === 'android') {
        cordova.exec(
            () => deferred.resolve(),
            (e: any) => deferred.reject(e),
            'AndroidScrollbar',
            'toggleVerticalScrollbarVisibility',
            [visibility]
        );
    } else {
        deferred.resolve();
    }

    return deferred.promise;
}

export function queryVerticalScrollbarVisibility(): tsd.PromiseInterface<boolean> {
    var deferred = tsd.create<boolean>();

    if (cordova.platformId.toLowerCase() === 'android') {
        cordova.exec(
            (result: number) => deferred.resolve(!!result),
            (e: any) => deferred.reject(e),
            'AndroidScrollbar',
            'queryVerticalScrollbarVisibility',
            []
        );
    } else {
        deferred.resolve(true);
    }

    return deferred.promise;
}
