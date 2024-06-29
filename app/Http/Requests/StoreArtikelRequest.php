<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArtikelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'kategori_artikel' => 'required|string',
            'penulis' => 'required|string',
            'judul_artikel' => 'required|string',
            'isi_artikel' => 'required|string',
            'gambar_artikel' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'kategori_artikel.required' => 'Kategori artikel wajib diisi.',
            'kategori_artikel.string' => 'Kategori artikel harus berupa teks.',
            
            'penulis.required' => 'Penulis artikel wajib diisi.',
            'penulis.string' => 'Penulis artikel harus berupa teks.',
            
            'judul_artikel.required' => 'Judul artikel wajib diisi.',
            'judul_artikel.string' => 'Judul artikel harus berupa teks.',
            
            'isi_artikel.required' => 'Isi artikel wajib diisi.',
            'isi_artikel.string' => 'Isi artikel harus berupa teks.',
            
            'gambar_artikel.required' => 'Gambar artikel wajib diunggah.',
            'gambar_artikel.image' => 'Gambar artikel harus berupa file gambar.',
            'gambar_artikel.mimes' => 'Gambar artikel harus berformat jpeg, png, atau jpg.',
            'gambar_artikel.max' => 'Ukuran gambar artikel tidak boleh lebih dari 2MB.',
        ];
    }

}
