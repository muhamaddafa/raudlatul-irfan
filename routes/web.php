<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Artikel;
use App\Models\Galeri;
use App\Models\Ekskul;
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

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('Home', ['artikel' => Artikel::latest()->take(3)->get(), 'galeri' => Galeri::all()]);
});

Route::get('/info', function () {
    return Inertia::render('Info', ['ekskul' => Ekskul::all()]);
});

Route::get('/berita', function () {
    return Inertia::render('Berita', ['artikel' => Artikel::all()]);
});

Route::get('/galeri', function () {
    return Inertia::render('Galeri', ['galeri' => Galeri::all()]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    // Main Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Artikel Dashboard
    // index
    Route::get('/dashboard/artikel', function () {
        return Inertia::render('Dashboard/DashboardArtikel');
    })->name('dashboard.artikel');
    // store
    Route::get('/dashboard/tambah/artikel', function () {
        return Inertia::render('Dashboard/Store/StoreArtikel');
    })->name('form.artikel');
    // Edit
    Route::get('/dashboard/artikel/{link_artikel}/edit', function ($link_artikel) {
        return Inertia::render('Dashboard/Update/EditArtikel', [
            'artikel' => Artikel::where('link_artikel', $link_artikel)->first()
        ]);
    })->name('edit.artikel');

    // Galeri Dashboard
    // index
    Route::get('/dashboard/galeri', function () {
        return Inertia::render('Dashboard/DashboardGaleri');
    })->name('dashboard.galeri');
    //store
    Route::get('/dashboard/tambah/galeri', function () {
        return Inertia::render('Dashboard/Store/StoreGaleri');
    })->name('form.galeri');

    // Ekstrakurikuler Dashboard
    // index
    Route::get('/dashboard/ekskul', function () {
        return Inertia::render('Dashboard/DashboardEkskul');
    })->name('dashboard.ekskul');
    // store
    Route::get('/dashboard/tambah/ekskul', function () {
        return Inertia::render('Dashboard/Store/StoreEkskul');
    })->name('form.ekskul');
    // edit
    Route::get('/dashboard/ekskul/{nama_ekskul}/edit', function ($nama_ekskul) {
        return Inertia::render('Dashboard/Update/EditEkskul', [
            'ekskul' => Ekskul::where('nama_ekskul', $nama_ekskul)->first()
        ]);
    })->name('edit.ekskul');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
