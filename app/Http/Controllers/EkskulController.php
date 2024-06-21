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
        $ekskul = Ekskul::all();
        return response()->json($ekskul);
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
            'gambar_ekskul' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if ($request->file('gambar_galeri')->isValid()) {
            $file = $request->file('gambar_galeri');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('/public/files', $fileName); //nyimpen gambar di storage

            $ekskul = Ekskul::create([
                'nama_ekskul' => $validatedData['nama_eskul'],
                'gambar_ekskul' => $fileName
            ]);

            return response()->json(['message' => 'File uploaded successfully'], 200);
        }
        return response()->json(['message' => 'Invalid file upload'], 400);
    }

    /**
     * Display the specified resource.
     */
    public function show(StoreEkskulRequest $request)
    {
        $ekskul = Ekskul::findorfail($request->id);
        return response()->json($ekskul);
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
            'nama_ekskul' => 'required|string|max:64',
            'gambar_ekskul' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        try {
            $ekskul->nama_ekskul = $request->input('nama_ekskul');

            if ($request->file('gambar_galeri')->isValid()) {
                $file = $request->file('gambar_galeri');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('/public/files', $fileName); //nyimpen gambar di storage
    
                $ekskul = Ekskul::create([
                    'nama_ekskul' => $validatedData['nama_eskul'],
                    'gambar_ekskul' => $fileName
                ]);
    
                $ekskul->gambar_ekskul = $fileName;
            }
            $ekskul->save();
            return response()->json(['message' => 'File uploaded successfully'], 200);
    
            return response()->json(['message' => 'Ekskul updated successfully', 'ekskul' => $ekskul], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update Ekskul', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekskul $ekskul)
    {
        try {
            $ekskul->delete();
            return response()->json(['message' => 'Ekskul deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete Ekskul', 'message' => $e->getMessage()], 500);
        }
    }
}
