<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\EkskulController;
use App\Http\Controllers\GaleriController;
use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(ArtikelController::class)->group(function (){
    Route::get('/artikel', 'index')->name('artikel.index');
    Route::get('/artikel/{artikel}', 'show');
    
    // Route::middleware('auth')->group(function (){
        Route::post('/artikel', 'store')->name('artikel.store');
        Route::put('/artikel/{artikel}', 'update');
        Route::delete('/artikel/{artikel}', 'destroy')->name('artikel.destroy');
    // });
});

Route::controller(GaleriController::class)->group(function (){
    Route::get('/galeri', 'index')->name('galeri.index');
    // Route::get('/galeri/{galeri}', 'show');

    // Route::middleware('auth')->group(function (){
        Route::post('/galeri', 'store')->name('galeri.store');
        // Route::put('/galeri/{galeri}', 'update');
        Route::delete('/galeri/{galeri}', 'destroy')->name('galeri.destroy');
    // });
});

Route::controller(EkskulController::class)->group(function () {
    Route::get('/ekskul', 'index')->name('ekskul.index');
    Route::get('/ekskul/{ekskul}', 'show');

    // Route::middleware('auth')->group(function () {
        Route::post('/ekskul', 'store')->name('ekskul.store');
        Route::put('/ekskul/{ekskul}', 'update');
        Route::delete('/ekskul/{ekskul}', 'destroy')->name('ekskul.destroy');
    // });
});