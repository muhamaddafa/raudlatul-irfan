<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Artikel;
use App\Models\Ekskul;
use App\Models\Galeri;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        // Artikel::factory(10)->create();
        // Ekskul::factory(10)->create();
        // Galeri::factory(10)->create();
    }
}
