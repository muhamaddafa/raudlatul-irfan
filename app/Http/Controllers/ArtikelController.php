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
            $artikels = Artikel::orderBy('created_at', 'desc')->paginate(8);
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
        if ($request->hasFile('gambar_artikel') && $request->file('gambar_artikel')->isValid()) {
            $file = $request->file('gambar_artikel');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('/public/artikel', $fileName); 

            $link = Hash::make($request->judul_artikel);
            $link = str_replace('/', '', $link);

            // Simpan artikel ke database
            $artikel = Artikel::create([
                'kategori_artikel' => $request->kategori_artikel,
                'penulis' => $request->penulis,
                'judul_artikel' => $request->judul_artikel,
                'isi_artikel' => $request->isi_artikel,
                'gambar_artikel' => $fileName,
                'link_artikel' => $link
            ]);

            return response()->json(['message' => 'Berhasil menambah artikel'], 201);
        } else {
            return response()->json(['error' => 'File gambar artikel tidak valid'], 400);
        }
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
    public function update(UpdateArtikelRequest $request, Artikel $artikel)
    {
        try {
            $data = $request->all();

            if ($request->hasFile('gambar_artikel') && $request->file('gambar_artikel')->isValid()) {
                // Hapus gambar lama jika ada
                if ($artikel->gambar_artikel) {
                    $oldFilePath = storage_path('app/public/artikel/' . $artikel->gambar_artikel);
                    if (file_exists($oldFilePath)) {
                        unlink($oldFilePath);
                    }
                }

                $file = $request->file('gambar_artikel');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/artikel', $fileName);

                $data['gambar_artikel'] = $fileName;
            } else {
                unset($data['gambar_artikel']);
            }

            $artikel->update($data);

            return response()->json([
                'message' => 'Artikel berhasil diperbarui',
                'data' => $artikel
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
