<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArtikelRequest extends FormRequest
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
            'kategori_artikel' => 'sometimes|required|string',
            'penulis' => 'sometimes|required|string',
            'judul_artikel' => 'sometimes|required|string',
            'isi_artikel' => 'sometimes|required|string',
            'gambar_artikel' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

     public function messages(): array
    {
        return [
            'gambar_artikel.image' => 'Gambar artikel harus berupa file gambar.',
            'gambar_artikel.mimes' => 'Gambar artikel harus berformat jpeg, png, atau jpg.',
            'gambar_artikel.max' => 'Ukuran gambar artikel tidak boleh lebih dari 2MB.',
        ];
    }
}
