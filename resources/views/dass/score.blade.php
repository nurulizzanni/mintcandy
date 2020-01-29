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
                                <h2 class="hud-main-text" id="result01">
                                0
                                </h2>
                                </div>
                                <div id="hud-item">
                                <p class="hud-prefix">
                                Anxiety
                                </p>
                                <h2 class="hud-main-text" id="result02">
                                0
                                </h2>
                                </div>
                                <div id="hud-item">
                                <p class="hud-prefix">
                                Depression
                                </p>
                                <h2 class="hud-main-text" id="result03">
                                0
                                </h2>
                                </div>
                            </dic>
                            <a class="btn1" href="/dass1">Play</a>
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