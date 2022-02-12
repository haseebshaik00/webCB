# Using MySQL

## Start MySQL Service
### Windows
Start the MySQL service (from Task Manager)

## Log in to MySQL as root
Without root password - 
```shell
mysql -u root
mysql> 
```

With root password - 
```shell
mysql -u root -p 
Enter Password: 
mysql> 
```

## Create DB, User, Grant access
```sql
CREATE DATABASE mytestdb;
CREATE USER myuser IDENTIFIED BY 'mypass';
USE mytestdb;
GRANT ALL PRIVILEGES ON mytestdb.* TO myuser;
FLUSH PRIVILEGES;
```

## Login using the new user
```shell
mysql -u myuser -p
Enter Password: (enter 'mypass' here)
mysql>
```