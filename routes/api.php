<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\EkskulController;
use App\Http\Controllers\GaleriController;
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

Route::get('/artikel', [ArtikelController::class, 'index']);
Route::post('/artikel', [ArtikelController::class, 'store']);
Route::get('/artikel/{id}', [ArtikelController::class, 'show']);
Route::put('/artikel/{id}', [ArtikelController::class, 'update']);
Route::delete('/artikel/{id}', [ArtikelController::class, 'destroy']);

Route::get('/galeri', [GaleriController::class, 'index']);
Route::post('/galeri', [GaleriController::class, 'store']);
Route::get('/galeri/{id}', [GaleriController::class, 'show']);
Route::put('/galeri/{id}', [GaleriController::class, 'update']);
Route::delete('/galeri/{id}', [GaleriController::class, 'destroy']);

Route::get('/ekskul', [EkskulController::class, 'index']);
Route::post('/ekskul', [EkskulController::class, 'store']);
Route::get('/ekskul/{id}', [EkskulController::class, 'show']);
Route::put('/ekskul/{id}', [EkskulController::class, 'update']);
Route::delete('/ekskul/{id}', [EkskulController::class, 'destroy']);