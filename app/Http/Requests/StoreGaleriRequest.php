<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGaleriRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'gambar_galeri' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'gambar_galeri.required' => 'Gambar wajib diunggah.',
            'gambar_galeri.mimes' => 'Gambar harus berformat jpeg, png atau jpg.',
            'gambar_galeri.max' => 'Ukuran gambar tidak boleh lebih dari 2MB.',
        ];
    }
}