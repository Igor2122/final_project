<?php


Route::get('/', 'HomeController@index');

Auth::routes();

Route::get('/user/area/{area}', 'User\AreaController@store')->name('user.area.store'); // we use here route binding and will be passing our route slug here


