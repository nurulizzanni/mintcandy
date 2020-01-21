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
                        <title>Result</title>  
                    </head>
                    <body>
                    <div class="container1">
                        <div class="flex-center1 flex-column1">
                            
                            
                            <h1>Result</h1> 
                        
                            <div  class="justify-center1 flex-column1">
   
                                <div id="hud-item" >
                                <p class="hud-prefix">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                Stress
                                </p>
                                <h1 class="hud-main-text" id="result1">
                                0
                                </h1>
                                </div>
                                <div id="hud-item">
                                <p class="hud-prefix">
                                Anxiety
                                </p>
                                <h1 class="hud-main-text" id="result2">
                                0
                                </h1>
                                </div>
                                <div id="hud-item">
                                <p class="hud-prefix">
                                Depression
                                </p>
                                <h1 class="hud-main-text" id="result3">
                                0
                                </h1>
                                </div>
                            </dic>
                            <a class="btn1" href="/game">Play</a>
                            <a class="btn1" href="/score">Result</a>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
@stop