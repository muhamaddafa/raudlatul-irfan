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


Route::controller(Artikel::class)->group(function (){
    Route::get('/artikel', [ArtikelController::class, 'index']);
    Route::get('/artikel/{id}', [ArtikelController::class, 'show']);
    
    // Route::middleware('auth')->group(function (){
        Route::post('/artikel', [ArtikelController::class, 'store']);
        Route::put('/artikel/{id}', [ArtikelController::class, 'update']);
        Route::delete('/artikel/{id}', [ArtikelController::class, 'destroy']);
    // });
});

Route::controller(GaleriController::class)->group(function (){
    Route::get('/galeri', 'index');
    Route::get('/galeri/{id}', 'show');

    // Route::middleware('auth')->group(function (){
        Route::post('/galeri', 'store');
        Route::put('/galeri/{id}', 'update');
        Route::delete('/galeri/{id}', 'destroy');
    // });
});

Route::controller(EkskulController::class)->group(function () {
    Route::get('/ekskul', 'index');
    Route::get('/ekskul/{id}', 'show');

    // Route::middleware('auth')->group(function () {
        Route::post('/ekskul', 'store');
        Route::put('/ekskul/{id}', 'update');
        Route::delete('/ekskul/{id}', 'destroy');
    // });
});