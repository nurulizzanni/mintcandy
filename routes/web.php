<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'SiteController@home');
Route::get('/register','SiteController@register');
Route::get('/about','SiteController@about');


Route::get('/login','AuthController@login')->name('login');
Route::post('/postlogin','AuthController@postlogin');
Route::get('/logout','AuthController@logout');
Route::get('/logout','AuthController@logout');


Route::group(['middleware'=>'auth','checkRole:admin'], function(){

    Route::get('/pengguna','PenggunaController@index');
    Route::post('/pengguna/create','PenggunaController@create');
    Route::get('/pengguna/{id}/edit','PenggunaController@edit');
    Route::post('/pengguna/{id}/update','PenggunaController@update');
    Route::get('/pengguna/{id}/delete','PenggunaController@delete');
    Route::get('/pengguna/{id}/profile', 'PenggunaController@profile');
    Route::post('/pengguna/{id}/addnilai', 'PenggunaController@addnilai');
    Route::get('/pengguna/{id}/{idtest}/deletenilai', 'PenggunaController@deletenilai');


    Route::get('/start', 'PenggunaController@start');
    Route::get('/game', 'PenggunaController@game');
    Route::get('/score', 'PenggunaController@score')->name('score');

    Route::get('/inspiration', 'PenggunaController@inspiration');
  

    Route::get('/home','HomeController@index')->name('home');
    Route::post('getFriends', 'HomeController@getFriends');
    Route::post('/session/create','SessionController@create');
    Route::post('/session/{session}/chats', 'ChatController@chats');
    Route::post('/session/{session}/read', 'ChatController@read');
    Route::post('/session/{session}/clear', 'ChatController@clear');
    Route::post('/session/{session}/block', 'BlockController@block');
    Route::post('/session/{session}/unblock', 'BlockController@unblock');
    Route::post('/send/{session}', 'ChatController@send');




    
});

Route::group(['middleware'=>'auth','checkRole:admin, pengguna'], function(){

    Route::get('/dashboard','DashboardController@index');

});

