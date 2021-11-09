<?php

namespace App\Settings;

use Illuminate\Database\Eloquent\Model;

class GramStainReaction extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'hpv_16',
        'hpv_18',
        'hpv_other',
        'ptshipment_id'
    ];
}
