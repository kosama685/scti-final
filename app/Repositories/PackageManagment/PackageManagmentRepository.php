<?php

namespace App\Repositories\PackageManagment;

use App\Models\UserContact;
use DB;
use Hash;
use Mail;
use Auth;
use Carbon\Carbon;
use App\Exceptions\GeneralException;

// Models
use App\Models\PackageManagment;

// Libraries
use App\Repositories\BaseRepository;

// Interfaces
use App\Repositories\PackageManagment\PackageManagmentInterface;

/**
 * Class PackageManagementRepository.
  */
class PackageManagmentRepository extends BaseRepository implements PackageManagmentInterface
{

	/*
     *
     * PackageManagementRepository constructor.
     * @param  PackageManagement  $model
     *
     */

    public function __construct(PackageManagment $model)
    {
        $this->model = $model;
    }

    /*
     *
     * @param array $data
     * @throws \Exception
     * @throws \Throwable
     * @return mixed[]
     *
     */

    public function update(array $data)
    {
        //dd($data);
        return DB::transaction(function () use ($data) {
            //dd($data['package_description']);
            $descriptions = json_decode($data['package_description'][0]);
            foreach ($data['package_id'] as $key => $value) {
                $package = $this->model::whereId($data['package_id'][$key])->update([
                    'package_name' => $data['package_name'][$key],
                    'charges' => $data['charges'][$key],
                    'description' => $descriptions[$key],
                ]);
            }
            return true;
        });

        throw new GeneralException(__('exceptions.backend.access.users.create_error'));
    }
}
