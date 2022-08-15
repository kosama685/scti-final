<!DOCTYPE html>
<html>
<head>
    <title>Contact Us Email</title>
</head>

<body>
<h2>Hi Admin {{ $contactUs->email }}</h2>
<br/>
<p>Has sent you a query through contact us.</p>
<p>Name: {{ $contactUs->name }}</p>
<p>Phone Number: {{ $contactUs->number }}</p>
<p>Message: {{ $contactUs->message }}</p>
<br/>
<br/>
<br>
<br>
<p>Thanks</p>
<p>Profession net</p>
</body>
</html>