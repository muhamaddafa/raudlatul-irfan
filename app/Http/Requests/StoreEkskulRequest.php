<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEkskulRequest extends FormRequest
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
            'nama_ekskul' => 'required|string|max:64',
            'pembuat' => 'required|string',
            'gambar_ekskul' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ];
    }

    public function messages()
    {
        return [
            'gambar_ekskul.required' => 'Gambar ekskul wajib diisi',
            'gambar_ekskul.image' => 'File harus berupa gambar',
            'gambar_ekskul.mimes' => 'Gambar harus berupa file dengan format jpeg, png, atau jpg',
            'gambar_ekskul.max' => 'Ukuran gambar tidak boleh lebih dari 2MB'
        ];
    }
}
