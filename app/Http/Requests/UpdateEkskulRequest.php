<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEkskulRequest extends FormRequest
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
            'nama_ekskul' => 'sometimes|required|string|max:64',
            'pembuat' => 'sometimes|required|string',
            'gambar_ekskul' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048'
        ];
    }

    public function messages(): array
    {
        return [
            'nama_ekskul.required' => 'Nama ekskul wajib diisi.',
            'nama_ekskul.string' => 'Nama ekskul harus berupa teks.',
            'nama_ekskul.max' => 'Nama ekskul tidak boleh lebih dari 64 karakter.',
            'pembuat.required' => 'Pembuat wajib diisi.',
            'pembuat.string' => 'Pembuat harus berupa teks.',
            'gambar_ekskul.image' => 'Gambar ekskul harus berupa file gambar.',
            'gambar_ekskul.mimes' => 'Gambar ekskul harus berformat jpeg, png, atau jpg.',
            'gambar_ekskul.max' => 'Ukuran gambar ekskul tidak boleh lebih dari 2MB.',
        ];
    }
}
