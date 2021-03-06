@extends('layouts.master')
@section('content')
    <div class="main">
        <div class ="main-content">
        <div class ="container-fluid">
            <div class ="row">
                <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading pass">
                    <head>
                        <title>Dass Test - Play</title>     
                    </head>
                    <body>
                        <div class="container">
                        <div id="game" class="justify-center flex-column">
                            <div id="hud">
                            <div id="hud-item">
                                <p id="progressText" class="hud-prefix">
                                Question
                                </p>
                                <div id="progressBar">
                                <div id="progressBarFull"></div>
                                </div>
                            </div>
                            <div id="hud-item">
                                <p class="hud-prefix">
                                Stress
                                </p>
                                <h1 class="hud-main-text" id="score1">
                                0
                                </h1>
                            </div>
                            <div id="hud-item">
                                <p class="hud-prefix">
                                Anxiety
                                </p>
                                <h1 class="hud-main-text" id="score2">
                                0
                                </h1>
                            </div>
                            <div id="hud-item">
                                <p class="hud-prefix">
                                Depression
                                </p>
                                <h1 class="hud-main-text" id="score3">
                                0
                                </h1>
                            </div>
                            </div>
                            <h2 id="question123">What is the answer to this questions?</h2>
                            <div class="choice-container">
                            <p class="choice-prefix">A</p>
                            <p class="choice-text" data-number="1">Choice 1</p>
                            </div>
                            <div class="choice-container">
                            <p class="choice-prefix">B</p>
                            <p class="choice-text" data-number="2">Choice 2</p>
                            </div>
                            <div class="choice-container">
                            <p class="choice-prefix">C</p>
                            <p class="choice-text" data-number="3">Choice 3</p>
                            </div>
                            <div class="choice-container">
                            <p class="choice-prefix">D</p>
                            <p class="choice-text" data-number="4">Choice 4</p>
                            </div>
                        </div>
                        </div>
                        <footer>
                            <div class="container-fluid">
                                <p class="copyright" id="id000"> 0</p>
                            </div>
                        </footer>


                    <script src="{{asset('dass/dass1.js')}}"></script>
                    </body>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
@stop