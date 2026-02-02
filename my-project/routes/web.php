<?php

use App\Http\Controllers\ForntController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/',[ForntController::class, 'home']);
Route::get('/about',[ForntController::class, 'about']);


Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
