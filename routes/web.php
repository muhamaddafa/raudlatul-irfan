<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Main Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Artikel Dashboard
    // index
    Route::get('/dashboard/artikel', function() {
        return Inertia::render('Dashboard/DashboardArtikel');
    })->name('dashboard.artikel');
    // store
    Route::get('/dashboard/tambah/artikel', function() {
        return Inertia::render('Dashboard/Store/StoreArtikel');
    })->name('form.artikel');

    // Galeri Dashboard
    // index
    Route::get('/dashboard/galeri', function() {
        return Inertia::render('Dashboard/DashboardGaleri');
    })->name('dashboard.galeri');
    //store
    Route::get('/dashboard/tambah/galeri', function() {
        return Inertia::render('Dashboard/Store/StoreGaleri');
    })->name('form.galeri');

    // Ekstrakurikuler Dashboard
    // index
    Route::get('/dashboard/ekskul', function() {
        return Inertia::render('Dashboard/DashboardEkskul');
    })->name('dashboard.ekskul');
    // store
    Route::get('/dashboard/tambah/ekskul', function() {
        return Inertia::render('Dashboard/Store/StoreEkskul');
    })->name('form.ekskul');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
