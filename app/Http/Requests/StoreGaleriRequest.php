<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGaleriRequest extends FormRequest
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
            'gambar_galeri' => 'required|image|mimes:jpeg,png,jpg|max:2048',
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
