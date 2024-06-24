<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArtikelRequest;
use App\Http\Requests\UpdateArtikelRequest;

class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $artikels = Artikel::all();
            return response()->json($artikels);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch articles',
                'message' => $e->getMessage() 
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArtikelRequest $request)
    {
        try {
            $validatedData = $request->validate([
                'kategori_artikel' => 'required|string',
                'penulis' => 'required|string',
                'judul_artikel' => 'required|string',
                'isi_artikel' => 'required|string',
                'gambar_artikel' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            if ($request->file('gambar_artikel')->isValid()) {
                $file = $request->file('gambar_artikel');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('/public/artikel', $fileName); 

                $link = Hash::make($validatedData['judul_artikel']);

                // Simpan artikel ke database
                $artikel = Artikel::create([
                    'kategori_artikel' => $validatedData['kategori_artikel'],
                    'penulis' => $validatedData['penulis'],
                    'judul_artikel' => $validatedData['judul_artikel'],
                    'isi_artikel' => $validatedData['isi_artikel'],
                    'gambar_artikel' => $fileName,
                    'link_artikel' => $link
                ]);
            } else {
                return response()->json(['error' => 'File gambar artikel tidak valid'], 400);
            }

            return response()->json(['message' => 'Berhasil menambah artikel'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Terjadi kesalahan saat menambah artikel', 'message' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Artikel $artikel)
    {
        try {
            if (!$artikel) {
                return response()->json(['error' => 'Artikel tidak ditemukan'], 404);
            }
            
            return response()->json($artikel, 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat menampilkan artikel',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artikel $artikel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreArtikelRequest $request, Artikel $artikel)
    {
        try {
            $validatedData = $request->validate([
                'kategori_artikel' => 'sometimes|required|string',
                'penulis' => 'sometimes|required|string',
                'judul_artikel' => 'sometimes|required|string',
                'isi_artikel' => 'sometimes|required|string',
                'gambar_artikel' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            if ($request->hasFile('gambar_artikel') && $request->file('gambar_artikel')->isValid()) {
                if ($artikel->gambar_artikel) {
                    $oldFilePath = storage_path('app/public/artikel/' . $artikel->gambar_artikel);
                    if (file_exists($oldFilePath)) {
                        unlink($oldFilePath);
                    }
                }

                // Upload gambar baru
                $file = $request->file('gambar_artikel');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/artikel', $fileName);

                $validatedData['gambar_artikel'] = $fileName;
            } else {
                unset($validatedData['gambar_artikel']);
            }

            $artikel->update($validatedData);

            return response()->json([
                'message' => 'Artikel berhasil diperbarui',
                'artikel' => $artikel
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat memperbarui artikel',
                'message' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artikel $artikel)
    {
        try {
            if ($artikel->gambar_artikel) {
                $filePath = storage_path('app/public/artikel/' . $artikel->gambar_artikel);
                if (file_exists($filePath)) {
                    unlink($filePath);
                } else {
                    return response()->json(['error' => 'Gambar artikel tidak ditemukan'], 404);
                }
            }
    
            $artikel->delete();
    
            return response()->json(['message' => 'Artikel berhasil dihapus'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat menghapus artikel', 
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
