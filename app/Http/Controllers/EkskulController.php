<?php

namespace App\Http\Controllers;

use App\Models\Ekskul;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEkskulRequest;
use App\Http\Requests\UpdateEkskulRequest;

class EkskulController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $ekskuls = Ekskul::all();
            return response()->json($ekskuls);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch ekskuls',
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
    public function store(StoreEkskulRequest $request)
    {
        try {
            if ($request->file('gambar_ekskul')->isValid()) {
                $file = $request->file('gambar_ekskul');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/ekskul', $fileName); 

                // Buat entri baru di database
                $ekskul = Ekskul::create([
                    'nama_ekskul' => $request->nama_ekskul,
                    'pembuat' => $request->pembuat,
                    'gambar_ekskul' => $fileName
                ]);

                return response()->json(['message' => 'File uploaded successfully', 'data' => $ekskul], 201);
            } else {
                return response()->json(['message' => 'Invalid file upload'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred while uploading the file', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Ekskul $ekskul)
    {
        try {
            if (!$ekskul) {
                return response()->json(['error' => 'ekskul tidak ditemukan'], 404);
            }
            return response()->json($ekskul, 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat menampilkan ekskul',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ekskul $ekskul)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEkskulRequest $request, Ekskul $ekskul)
    {
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('gambar_ekskul') && $request->file('gambar_ekskul')->isValid()) {
                if($ekskul->gambar_ekskul) {
                    $oldFilePath = storage_path('app/public/ekskul/' . $ekskul->gambar_ekskul);
                    if (file_exists($oldFilePath)) {
                        unlink($oldFilePath);
                    } else {
                        return response()->json(['error' => 'Gambar ekskul tidak ditemukan'], 404);
                    }
                }

                $file = $request->file('gambar_ekskul');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/ekskul', $fileName);
                $ekskul->update([
                    'nama_ekskul' => $validatedData['nama_ekskul'],
                    'pembuat' => $validatedData['pembuat'],
                    'gambar_ekskul' => $fileName
                ]);
            } else {
                $ekskul->update([
                    'nama_ekskul' => $validatedData['nama_ekskul'],
                    'pembuat' => $validatedData['pembuat']
                ]);
            }
            return response()->json([
                'message' => 'Ekskul updated successfully',
                'ekskul' => $ekskul
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to update Ekskul',
                'message' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekskul $ekskul)
    {
        try {
            if ($ekskul->gambar_ekskul) {
                $filePath = storage_path('app/public/ekskul/' . $ekskul->gambar_ekskul);
                if (file_exists($filePath)) {
                    unlink($filePath);
                } else {
                    return response()->json(['error' => 'Gambar ekskul tidak ditemukan'], 404);
                }
            }
    
            $ekskul->delete();
    
            return response()->json(['message' => 'Ekskul berhasil dihapus'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Terjadi kesalahan saat menghapus ekskul', 
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
