<?php

namespace App\Repositories;

// Libraries
use Ixudra\Curl\Facades\Curl;
use Twilio\Rest\Client;
use Carbon\Carbon;

use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use FCM;

// Models
use App\Models\User;
use App\Models\Notification;

/**
 * Class BaseRepository.
 *
 * Modified from: https://github.com/kylenoland/laravel-base-repository
 */
abstract class BaseRepository implements RepositoryContract
{
    /**
     * The repository model.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * The query builder.
     *
     * @var \Illuminate\Database\Eloquent\Builder
     */
    protected $query;

    /**
     * Alias for the query limit.
     *
     * @var int
     */
    protected $take;

    /**
     * Array of related models to eager load.
     *
     * @var array
     */
    protected $with = [];

    /**
     * Array of one or more where clause parameters.
     *
     * @var array
     */
    protected $wheres = [];

    /**
     * Array of one or more where in clause parameters.
     *
     * @var array
     */
    protected $whereIns = [];

    /**
     * Array of one or more ORDER BY column/value pairs.
     *
     * @var array
     */
    protected $orderBys = [];

    /**
     * Array of scope methods to call on the model.
     *
     * @var array
     */
    protected $scopes = [];

    /**
     * Get all the model records in the database.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        $this->newQuery()->eagerLoad();

        $models = $this->query->get();

        $this->unsetClauses();

        return $models;
    }

    /**
     * Count the number of specified model records in the database.
     *
     * @return int
     */
    public function count()
    {
        return $this->get()->count();
    }

    /**
     * Get the first specified model record from the database.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function first()
    {
        $this->newQuery()->eagerLoad()->setClauses()->setScopes();

        $model = $this->query->firstOrFail();

        $this->unsetClauses();

        return $model;
    }

    /**
     * Get all the specified model records in the database.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function get()
    {
        $this->newQuery()->eagerLoad()->setClauses()->setScopes();

        $models = $this->query->get();

        $this->unsetClauses();

        return $models;
    }

    /**
     * Get the specified model record from the database.
     *
     * @param $id
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getById($id)
    {
        $this->unsetClauses();

        $this->newQuery()->eagerLoad();

        return $this->query->findOrFail($id);
    }

    /**
     * @param $item
     * @param $column
     * @param  array  $columns
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object|null
     */
    public function getByColumn($item, $column, array $columns = ['*'])
    {
        $this->unsetClauses();

        $this->newQuery()->eagerLoad();

        return $this->query->where($column, $item)->first($columns);
    }

    /**
     * Delete the specified model record from the database.
     *
     * @param $id
     *
     * @return bool|null
     * @throws \Exception
     */
    public function deleteById($id)
    {
        $this->unsetClauses();

        return $this->getById($id)->delete();
    }

    /**
     * Set the query limit.
     *
     * @param int $limit
     *
     * @return $this
     */
    public function limit($limit)
    {
        $this->take = $limit;

        return $this;
    }

    /**
     * Set an ORDER BY clause.
     *
     * @param string $column
     * @param string $direction
     * @return $this
     */
    public function orderBy($column, $direction = 'asc')
    {
        $this->orderBys[] = compact('column', 'direction');

        return $this;
    }

    /**
     * @param int    $limit
     * @param array  $columns
     * @param string $pageName
     * @param null   $page
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($limit = 25, array $columns = ['*'], $pageName = 'page', $page = null)
    {
        $this->newQuery()->eagerLoad()->setClauses()->setScopes();

        $models = $this->query->paginate($limit, $columns, $pageName, $page);

        $this->unsetClauses();

        return $models;
    }

    /**
     * Add a simple where clause to the query.
     *
     * @param string $column
     * @param string $value
     * @param string $operator
     *
     * @return $this
     */
    public function where($column, $value, $operator = '=')
    {
        $this->wheres[] = compact('column', 'value', 'operator');

        return $this;
    }

    /**
     * Add a simple where in clause to the query.
     *
     * @param string $column
     * @param mixed  $values
     *
     * @return $this
     */
    public function whereIn($column, $values)
    {
        $values = is_array($values) ? $values : [$values];

        $this->whereIns[] = compact('column', 'values');

        return $this;
    }

    /**
     * Set Eloquent relationships to eager load.
     *
     * @param $relations
     *
     * @return $this
     */
    public function with($relations)
    {
        if (is_string($relations)) {
            $relations = func_get_args();
        }

        $this->with = $relations;

        return $this;
    }

    /**
     * Create a new instance of the model's query builder.
     *
     * @return $this
     */
    protected function newQuery()
    {
        $this->query = $this->model->newQuery();

        return $this;
    }

    /**
     * Add relationships to the query builder to eager load.
     *
     * @return $this
     */
    protected function eagerLoad()
    {
        foreach ($this->with as $relation) {
            $this->query->with($relation);
        }

        return $this;
    }

    /**
     * Set clauses on the query builder.
     *
     * @return $this
     */
    protected function setClauses()
    {
        foreach ($this->wheres as $where) {
            $this->query->where($where['column'], $where['operator'], $where['value']);
        }

        foreach ($this->whereIns as $whereIn) {
            $this->query->whereIn($whereIn['column'], $whereIn['values']);
        }

        foreach ($this->orderBys as $orders) {
            $this->query->orderBy($orders['column'], $orders['direction']);
        }

        if (isset($this->take) and ! is_null($this->take)) {
            $this->query->take($this->take);
        }

        return $this;
    }

    /**
     * Set query scopes.
     *
     * @return $this
     */
    protected function setScopes()
    {
        foreach ($this->scopes as $method => $args) {
            $this->query->$method(implode(', ', $args));
        }

        return $this;
    }

    /**
     * Reset the query clause parameter arrays.
     *
     * @return $this
     */
    protected function unsetClauses()
    {
        $this->wheres = [];
        $this->whereIns = [];
        $this->scopes = [];
        $this->take = null;

        return $this;
    }

    public function sendTextMessage($toNumber, $body){

        $accountId = 'AC58dd61de076fc783bd086b77874e215a';
        $token = 'f26ae89abf8ee71b9e80244c1f8d0930';
        $client = new Client($accountId, $token);
        $message = $client->messages->create(
          $toNumber, // Text this number
          [
            'from' => '+12136992611', // From a valid Twilio number
            'body' => $body
          ]
        );
    }

    public function sendMessage($phone, $message) {

       //JAZZ OTP
        $phoneNumber = smsPhoneFormatter($phone);

        $data = Array();
        $data['number'] = $phoneNumber;
        $data['message'] = $message;
        $data['token'] = 'SVgRfDn0h%yxDo&$';
        $data['appname'] = 'symmetry';
        $data['masking'] = 'Symmetry';

        $OTPResponse = Curl::to('https://symmetrydigital-labs.com/SMSsms_pushPUSH_75160/sendMsg.php')
        ->withData($data)->post();
        return $OTPResponse;
    }

    /*
     * AuthController generatePin.
     *
     * @param  $digits
     *
     */

    public function generatePin($digits){

        $i = 0; //counter
        $pin = ""; //our default pin is blank.
        while($i < $digits){
            //generate a random number between 0 and 9.
            $pin .= mt_rand(0, 9);
            $i++;
        }
        return $pin;
    }

    /**
     * @param array $data
     *
     */

    public function generateTxnId($digits){

        $i = 0; //counter
        $pin = ""; //our default pin is blank.
        while($i < $digits){
            //generate a random number between 0 and 9.
            $pin .= mt_rand(0, 9);
            $i++;
        }
        return 'ANGL'.$pin;
    }

    public function sendNotification($tokens, $title, $body, $dataArray)
    {
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(1);

        $notificationBuilder = new PayloadNotificationBuilder($title);
        $notificationBuilder->setBody($body);

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData($dataArray);

        $option = $optionBuilder->build();
        $notification = $notificationBuilder->build();
        $data = $dataBuilder->build();
        $downstreamResponse = FCM::sendTo($tokens, $option, $notification, $data);

        if($downstreamResponse->numberSuccess()){
            return true;
        }else{
            return false;
        }
    }

    public function sendDataMessage($tokens, $dataArray)
    {
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(1);

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData($dataArray);

        $option = $optionBuilder->build();
        $data = $dataBuilder->build();
        $downstreamResponse = FCM::sendTo($tokens, $option, null, $data);

        if($downstreamResponse->numberSuccess()){
            return true;
        }else{
            return false;
        }
    }

    public function createNotification($uuid, $userId, $from_user_id, $title, $body, $data, $notiticationType){

        $notification = Notification::create([
            'uuid'              =>  $uuid,
            'user_id'           =>  $userId,
            'from_user_id'      =>  $from_user_id,
            'title'             =>  $title,
            'body'              =>  $body,
            'data'              =>  $data,
            'notification_type' =>  $notiticationType,
        ]);

        if(isset($notification->id)){
            return true;
        }else{
            return false;
        }
    }
    
    //fileUpload
    public function fileUpload($data,$user_id,$folder)
    {
        if(isset($data)){
            $file_photo = $data;
            $timestamp  = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
            $image   = $timestamp.'-'.str_replace([' ', ':'], '-', $file_photo->getClientOriginalName());
            $file_photo->move( public_path('images/'.$folder.'/'), $image );
            $image_url = url('/images/'.$folder.'/').'/'.$image;

            $user = User::whereId($user_id)->update([
                'image' => $image
            ]);
            return true;
        }
        return false;
    }
}
