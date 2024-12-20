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
            'gambar_artikel.required' => 'Gambar artikel wajib diunggah.',
            'gambar_artikel.image' => 'Gambar artikel harus berupa file gambar.',
            'gambar_artikel.mimes' => 'Gambar artikel harus berformat jpeg, png, atau jpg.',
            'gambar_artikel.max' => 'Ukuran gambar artikel tidak boleh lebih dari 2MB.',
        ];
    }

}
