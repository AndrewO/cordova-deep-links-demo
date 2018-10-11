/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // this.receivedEvent('deviceready');
        console.log("Ready");
        universalLinks.subscribe('openNewsListPage', this.onNewsListPageRequested.bind(this));
        universalLinks.subscribe('openNewsDetailedPage', this.onNewsDetailedPageRequested.bind(this));
    
        // universalLinks.subscribe(null, function (eventData) {
        //     console.log('Did launch application from the link: ' + eventData.url);
        //     this.logObject(eventData);
        // });
        // this.logObject({test: 123})
    },
    // openNewsListPage Event Handler
    onNewsListPageRequested: function(eventData) {
        console.log('Showing list of awesome news.');
        this.logObject(eventData);

        // do some work to show list of news
    },

    // openNewsDetailedPage Event Handler
    onNewsDetailedPageRequested: function(eventData) {
        console.log('Showing to user details page: ' + eventData.path);
        this.logObject(eventData);

        // do some work to show detailed page
    },
    // log object
    logObject: function(eventData) {
        var consoleElement = document.getElementById('console');
        var lineEl = document.createElement("p");
        lineEl.appendChild(document.createTextNode(JSON.stringify(eventData)));
        consoleElement.appendChild(lineEl);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();