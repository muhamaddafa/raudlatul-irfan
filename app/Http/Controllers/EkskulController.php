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
        $validatedData = $request->validate([
            'nama_ekskul' => 'required|string|max:64',
            'pembuat' => 'required|string',
            'gambar_ekskul' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if ($request->file('gambar_ekskul')->isValid()) {
            $file = $request->file('gambar_ekskul');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('/public/ekskul', $fileName); 

            $ekskul = Ekskul::create([
                'nama_ekskul' => $validatedData['nama_ekskul'],
                'pembuat' => $validatedData['pembuat'],
                'gambar_ekskul' => $fileName
            ]);

            return response()->json(['message' => 'File uploaded successfully'], 200);
        }
        return response()->json(['message' => 'Invalid file upload'], 400);
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
        $validatedData = $request->validate([
            'nama_ekskul' => 'sometimes|required|string|max:64',
            'pembuat' => 'sometimes|required|string',
            'gambar_ekskul' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        try {
            if ($request->hasFile('gambar_ekskul') && $request->file('gambar_ekskul')->isValid()) {
                $file = $request->file('gambar_ekskul');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('/public/ekskul', $fileName);

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
