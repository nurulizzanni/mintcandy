@extends('layouts.master')
@section('content')
    <div class="main">
        <div class ="main-content">
        <div class ="container-fluid">
                <div class="panel">
                    <div class="panel-heading">
                    
                        <h1><p style="text-align:center">WARNING!!!</p></h1> 
                        <h2><p style="text-align:center">This Quotes May Inspire You...</p></h2>
                       
                    </div>
                    <div class="panel-body">
                   
                        <div class="col-md-6 col-md-offset-3 well well-wrap1">
                            
                            <div id="quoteBody"></div>
                            <div style="text-align:right" id="authorBody"></div>
                            
                            <div style="margin-top:20px;">      
                            <a class=" tweet-btn btn btn-info pull-left" target="_blank" href="" data-size="large">Tweet</a>
                            <button id="nxtQuote" class="btn btn-default pull-right">Next Quote</button>
                            </div>
                            
                        </div>
                    </div>
                            <div style="margin-top:20px;">   
                            <div  style="text-align:right" id="quoteTag" class="container-fluid copyright"></div>
                            </div>
                </div>
        </div>
        </div>
    </div>
@stop
@