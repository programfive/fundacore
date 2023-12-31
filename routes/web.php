<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('Profile')->group(function () {
    Route::get('/update',App\Http\Livewire\Profile\UpdateProfile::class)->name('profile.update');
});

Route::middleware('auth')->prefix('Jobs')->group(function () {
    Route::get('/index',App\Http\Livewire\Jobs\IndexJob::class)->name('jobs.index');
});
Route::middleware('auth')->prefix('children')->group(function () {
    Route::get('/index',App\Http\Livewire\Children\IndexChild::class)->name('children.index');
    Route::get('/{child}/update',App\Http\Livewire\Children\UpdateChild::class)->name('children.update');
    Route::get('/create',App\Http\Livewire\Children\CreateChild::class)->name('children.create');
});

require __DIR__.'/auth.php'; 