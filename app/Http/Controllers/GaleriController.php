<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGaleriRequest;
use App\Http\Requests\UpdateGaleriRequest;

class GaleriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeri = Galeri::all();
        return response()->json($galeri);
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
        $validateData = $request->validate([
            'gambar_galeri' => 'required|image|mimes:jpeg,png'
        ]); 

        if ($request->file('gambar_galeri')->isValid()) {
            $file = $request->file('gambar_galeri');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('/public/files', $fileName);

            // Simpan nama file di database
            $fileRecord = new Galeri();
            $fileRecord->gambar_galeri = $fileName;
            $fileRecord->save();

            return response()->json(['message' => 'File uploaded successfully'], 200);
        }
        return response()->json(['message' => 'Invalid file upload'], 400);
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
    public function destroy(UpdateGaleriRequest $request)
    {
        try{
            $galeri = Galeri::findorfail($request->id);
            $galeri->delete();
            return response()->json(['message' => 'berhasil menghapus foto dengan id $request->id']);
        }
        catch(\Exception $e){
            return response()->json(['error' => 'gagal menghapus foto'], 500);
        }
    }
}
