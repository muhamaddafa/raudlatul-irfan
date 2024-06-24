<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;
    protected $fillable = ["kategori_artikel", "penulis", "judul_artikel", "isi_artikel", "gambar_artikel", "link_artikel"];
}
