@extends('layouts.app')

@section('content')
<div class="container">
    <div class="jumbotron">
        <div class="row">
            @foreach ($areas as $country )
                <div class="col-md-12">
                    <h2><a href="">{{ $country->name }}</a></h2>
                    <hr>
                    <div class="row">
                        @foreach ($country->children as $obl)
                        <div class="col-md-4">
                            <h3><a href="">{{ $obl->name }}</a></h3>
                                <hr>
                                @foreach ($obl->children as $town)
                                    <h5><a href="">{{ $town->name }}</a></h5>
                                @endforeach
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
