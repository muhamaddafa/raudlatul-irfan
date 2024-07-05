<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGaleriRequest;
use App\Http\Requests\UpdateGaleriRequest;
use Illuminate\Validation\ValidationException;

class GaleriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $galeris = Galeri::all();
            return response()->json($galeris);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch galeris',
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
    public function store(StoreGaleriRequest $request)
    {
        try {
            if ($request->file('gambar_galeri')) {
                $file = $request->file('gambar_galeri');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/galeri', $fileName);

                $galeri = Galeri::create([
                    'gambar_galeri' => $fileName
                ]);

                return response()->json([
                    'message' => 'File uploaded successfully', 
                    'galeri' => $galeri
                ], 200);
            } else {
                return response()->json(['error' => 'Invalid file upload'], 400);
            }
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Validation failed', 
                'messages' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to store galeri', 
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Galeri $galeri)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Galeri $galeri)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGaleriRequest $request, Galeri $galeri)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galeri $galeri)
    {
        try {
            if ($galeri->gambar_galeri) {
                $filePath = storage_path('app/public/galeri/' . $galeri->gambar_galeri);
                if (file_exists($filePath)) {
                    unlink($filePath);
                } else {
                    return response()->json(['error' => 'Gambar artikel tidak ditemukan'], 404);
                }
            }
    
            $galeri->delete();
    
            return response()->json(['message' => 'Galeri berhasil dihapus'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat menghapus galeri', 
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
