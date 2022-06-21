## API Routes
The APIs aim to adhere to RESTful best practice. Here are the routes currently implemented.    

| Method | Path | Role | Expected props | Response |
|---|---|---|---|--|
| GET	| /waitinglist | Every students on the waiting list |  | {success: boolean, payload: [{id, name, coursename}]} | 
| GET	| /waitinglist/'coursename' | Every student per course on the waiting list | {coursename} as :id | {success: boolean, payload: [{id, name, coursename}]} |
| POST | /waitinglist | Post a new student to the waiting list | {name, coursename}	| {success: boolean, payload: string} |
| DELETE | /waitinglist |	Delete student from the waiting list | {name, coursename}	| {success: boolean, payload: string}	|
| GET |	/announcement |	List every announcement | |  {success: boolean, payload: [{index, id, topic, student, date, time}]} |
| POST |	/announcement |	Create a new announcement | {id, topic, student, date, time}	| {success: boolean, payload: string}|
| GET	| /course |	List every courses | | {success: boolean, payload: [{id, coursename}]} |
| POST | /course | Create a new course category | {coursename}	| {success: boolean,   payload: string} |	
