	var global_name,
		global_surname,
		global_gender = "male",
		progressbar_status;

	// name array(s)
	var arab_names = [
		"Jamal","Abdul","Fahd","Ibrahim","Osama","Ramiz","Ziad","Najib","Naseeb","Malik","Latif","Kadeem","Kadir","Faris","Jamil",
		"Hakam","Hakim","Hamid","Hasib","Ishak","Irfan","Gaffar","Furkan","Fuad","Asad","Aziz","Amer","Amin", "Yusuf", "Amir"
	];
	var hispanic_names = [
		"Carlos", "Diego", "Francisco", "Juan", "Santiago", "Enrique", "Sebastian", "Pablo", "Nicolas", "Luis", "David",
		"Felipe", "Manuel", "Luciano", "Bruno", "Dylan", "Jorge", "Simon", "Jesus", "Martin", "Emiliano", "Armando", "Tony"
	];
	var romanfrench_names = [
		"Francesco", "Simon", "Andrea", "Fabrizzio", "Giovanni", "Luigi", "Marco", "Alessandro", "Flavio", "Angelo", "Luca",
		"Martin", "Auguste", "Alberto", "Cesare", "Clemente", "Louis", "Tony", "Emanuele", "Giuseppe", "Salvatore", "Antonio"
	];
	var slavic_names = [
		"Vadim", "Yaroslav", "Viktor", "Vlad", "Vladimir", "Boris", "Budimir", "Anton", "Miroslav", "Darko", "Dusan", "Mladen", "Zdravko",
		"Milos", "Ognjen", "Goran", "Rastislav", "Vukasin", "Radislav", "Miroljub", "Egor", "Pavle", "Nikola"
	];
	var english_names = [
		"John", "Paul", "Aaron", "Carl", "Michael", "Sean", "Seth", "Brian", "Josh", "James", "Phil", "Martin", "Tony", "Frank", "Louis",
		"Mark", "Mike", "Steven", "Steve", "Layne", "Chris", "Keith", "Peter", "Jack", "Mason", "Jacob", "Oliver", "William", "Vince",
		"Charles", "Thomas", "Tom", "Richard", "David", "Robert", "Rob", "Raymond", "Charlie", "Jake", "Connor"
	];
	var hindu_names = [
		"Muhammad", "Sai", "Arjun", "Vihaan", "Reyanash", "Krish", "Dhruv", "Kabir", "Arush", "Anik", "Om"
	];
	var chinese_names = [
		"Zhao", "Qian", "Sun", "Li", "Zhou", "Wu", "Zheng", "Wang", "Feng", "Chen", "Chu", "Wei", "You", "Xu", "Tang"
	];
	// female names
	var arab_names_fem = [
		"Abeer", "Aliya", "Dalal", "Bushra", "Lulwa", "Samar", "Najat"
	];
	var hispanic_names_fem = [
		"Sofia", "Isabella", "Valentina", "Valeria", "Luciana", "Maria", "Mariana", "Jimena"
	];
	var romanfrench_names_fem = [
		"Emma", "Chloe", "Louise", "Sarah", "Adele", "Jeanne"
	];
	var slavic_names_fem = [
		"Jelena", "Elena", "Eva", "Feodora", "Emika", "Jaroslawa"
	];
	var english_names_fem = [
		"Emma", "Barbara", "Ashley", "Clara", "Denise", "Diana", "Helen", "Julia", "Leona", "Megan", "Martha", "Nicole", "Nora", "Penelope"
	];
	var hindu_names_fem = [
		"Ananya", "Saanvi",  "Anaya"
	];
	var chinese_names_fem = [
		"Yu", "Yan", "Feng", "Fei", "Ying"
	];
	// surname array(s)
	var anglic_surnames = [
		"Johnson", "Brown", "Thompson", "Smith", "Williams", "Davis", "Miller", "Wilson", "Doyle", "Roberts", "Rodriguez", "Lee",
		"Lewis", "Evans", "Edwards", "Collins", "Griffin", "Russell", "Long", "Scott", "Green", "Hall", "Young", "Bennett", "Mason",
		"Woods", "Clinton", "White", "Philips", "Adams", "Taylor", "Martin", "Garcia", "Clark", "Mitchell", "Campbell", "Regal",
		"Cooper", "Murphy", "Morgan", "Rogers", "Sanchez", "Stewart", "Cornell", "Price", "Walker", "Toreno"
	];
	var spanish_surnames = [
		"Garcia", "Marquez", "Villa", "Silva", "Torres", "Lopez", "Martinez", "Rodriguez", "Gonzales", "Perez", "Martin", "Gomez",
		"Molina", "Ortega", "Navarro", "Romero", "Moreno", "Munoz", "Ruiz", "Diaz", "Alba", "Vidal", "Flores", "Crespo", "Cortes",
		"Menendez", "Escobar", "Reyes", "Pastor", "Mendez", "Campos"
	];
	var italian_surnames = [
		"Falcone", "Cappelletti", "Bianco", "Ferrara", "Fabri", "Leoni", "Mancini", "Marino", "Morelli", "Pellegrini",
		"Berlusconi", "Quattro", "Rossi", "Villa", "Testa", "Verga", "Vinci", "Zucca", "Colombo", "Moretti", "Bruno"
	];
	var balkan_surnames = [
		"Petrovic", "Hadzic", "Hodzic", "Kovacevic", "Savic", "Imamovic", "Novak", "Babic", "Horvat", "Markovic",
		"Popovic", "Ivanovic", "Radovic", "Vukovic"
	];
	var east_european_surnames = [
		"Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov",
		"Volkov", "Lebdev", "Semenov", "Egorov", "Pavlov", "Nikolaev", "Orlov"
	];
	var arab_surnames = [ 
		"Mekki", "Abid",  "Salem", "Saleem", "Omari", "Hamedi", "Hammam", "Hachemi", "Khalil", "Assaf", "Kmalil"
	];
	var chinese_surnames = [
		"Wang", "Li", "Zhang", "Chen", "Yang", "Zhao", "Wu", "Sun", "Ma", "Zhu", "Hu", "Guo", "Gao", "Luo", "Zheng"
	];
	var hindu_surnames = [
		"Patel", "Reddy", "Laghari", "Babu", "Bakshi", "Burman", "Dewan", "Joshi", "Mangal", "Jain", "Khanna", "Gokhale"
	];
	var scandinavian_surnames = [
		"Ericson", "Lorenson", "Jensen", "Nielsen", "Hansen", "Pedersen", "Larsen", "Holm", "Eriksen", "Jeppesen", "Poulsen",
		"Madsen", "Petersen", "Jepsen", "Mogensen", "Jespersen", "Simonsen"
	];

	function return_random_surname() {

		var random = Math.floor( Math.random() * 9 );
		if( random == 0 ) return "Anglic";
		else if( random == 1 ) return "Spanish";
		else if( random == 2 ) return "Italian";
		else if( random == 3 ) return "Balkans";
		else if( random == 4 ) return "East-European";
		else if( random == 5 ) return "Arab";
		else if( random == 6 ) return "Chinese";
		else if( random == 7 ) return "Hindu";
		else if( random == 8 ) return "Scandinavian";
	}

	function return_random_name() {

		var random = Math.floor( Math.random() * 8 );
		if( random == 0 ) return "Arab";
		else if( random == 1 ) return "Hispanic";
		else if( random == 2 ) return "Mediterranean";
		else if( random == 3 ) return "Slavic";
		else if( random == 4 ) return "Chinese";
		else if( random == 5 ) return "English";
		else if( random == 6 ) return "Chinese";
		else if( random == 7 ) return "Hindu";	
	}

	function generate_surname( temp_surname ) {
		if( temp_surname == "Anglic" ) return anglic_surnames[ Math.floor( Math.random() * anglic_surnames.length ) ];
		else if( temp_surname == "Spanish" ) return spanish_surnames[ Math.floor( Math.random() * spanish_surnames.length ) ];
		else if( temp_surname == "Italian" ) return italian_surnames[ Math.floor( Math.random() * italian_surnames.length ) ];
		else if( temp_surname == "Balkans" ) return balkan_surnames[ Math.floor( Math.random() * balkan_surnames.length ) ];
		else if( temp_surname == "East-European" ) return east_european_surnames[ Math.floor( Math.random() * east_european_surnames.length ) ];
		else if( temp_surname == "Arab" ) return arab_surnames[ Math.floor( Math.random() * arab_surnames.length ) ];
		else if( temp_surname == "Chinese" ) return chinese_surnames[ Math.floor( Math.random() * chinese_surnames.length ) ];
		else if( temp_surname == "Hindu" ) return hindu_surnames[ Math.floor( Math.random() * hindu_surnames.length ) ];
		else if( temp_surname == "Scandinavian" ) return scandinavian_surnames[ Math.floor( Math.random() * scandinavian_surnames.length ) ];
	}

	function generate_name( temp_name ) {
		if( temp_name == "Arab" ) {
			if( global_gender == "Female" ) {
				return arab_names_fem[ Math.floor( Math.random() * arab_names_fem.length ) ];
			} else {
				return arab_names[ Math.floor( Math.random() * arab_names.length ) ];
			}
		} else if( temp_name == "Hispanic" ) {
			if( global_gender == "Female" ) {
				return hispanic_names_fem[ Math.floor( Math.random() * hispanic_names_fem.length ) ];
			} else {
				return hispanic_names[ Math.floor( Math.random() * hispanic_names.length ) ];
			}			
		} else if( temp_name == "Mediterranean" ) {
			if( global_gender == "Female" ) {
				return romanfrench_names_fem[ Math.floor( Math.random() * romanfrench_names_fem.length ) ];
			} else {
				return romanfrench_names[ Math.floor( Math.random() * romanfrench_names.length ) ];
			}	
		} else if( temp_name == "Slavic" ) {
			if( global_gender == "Female" ) {
				return slavic_names_fem[ Math.floor( Math.random() * slavic_names_fem.length ) ];
			} else {
				return slavic_names[ Math.floor( Math.random() * slavic_names.length ) ];
			}	
		} else if( temp_name == "Chinese" ) {
			if( global_gender == "Female" ) {
				return chinese_names_fem[ Math.floor( Math.random() * chinese_names_fem.length ) ];
			} else {
				return chinese_names[ Math.floor( Math.random() * chinese_names.length ) ];
			}	
		} else if( temp_name == "English" ) {
			if( global_gender == "Female" ) {
				return english_names_fem[ Math.floor( Math.random() * english_names_fem.length ) ];
			} else {
				return english_names[ Math.floor( Math.random() * english_names.length ) ];
			}	
		} else if( temp_name == "Hindu" ) {
			if( global_gender == "Female" ) {
				return hindu_names_fem[ Math.floor( Math.random() * hindu_names_fem.length ) ];
			} else {
				return hindu_names[ Math.floor( Math.random() * hindu_names.length ) ];
			}	
		}
	}

	function display_generated() {

		if( global_name == undefined || global_surname == undefined ) return alert( "Please choose name and surname race/nationality.")
		var 
			name = generate_name( global_name ),
			surname = generate_surname( global_surname );

		document.getElementById( "overlay_name_text" ).innerHTML = name+" "+surname+"<br>";
		document.getElementById( "overlay_info" ).innerHTML = "Name race/nationality: "+ global_name+"<br>"+"Surname nationality/region: "+ global_surname+"<br>SA-MP format: "+name+"_"+surname;
		console.log( "debug: name == "+ name+" | "+"surname == "+ surname );
		document.getElementById( "overlay" ).style.display = "block";
	}

	function hide_generated() {
		document.getElementById( "overlay" ).style.display = "none";
	}

	function progressbar_update() {
		var temp_status = 0;
		if( global_name != undefined ) temp_status += 50;
		if( global_surname != undefined ) temp_status += 50;
		document.getElementById( "progressbar" ).style.width = temp_status+"%";
		return (temp_status);
	}

	function gl() {
		var tempname = global_name,
			tempsurname = global_surname,
			tempgender = global_gender,
			random_modifier = Math.floor( Math.random() * 2 );


		global_name = return_random_name();
		global_surname = return_random_surname();
		global_gender = ( random_modifier == 0 ) ? ( "male" ) : ( "Female" );
		display_generated();
		global_name = tempname;
		global_surname = tempsurname;
		global_gender = tempgender;
	}

	function name_assign( name_var ) {
		global_name = name_var;
		document.getElementById( "name_dropdown" ).innerHTML = "Name ("+ name_var + ")";
		progressbar_update();
	}
	function surname_assign( surname_var ) {
		global_surname = surname_var;
		document.getElementById( "surname_dropdown" ).innerHTML = "Surname ("+ surname_var + ")";
		progressbar_update();
	}
	function gender_assign( gendervar ) {
		global_gender = gendervar;
		document.getElementById( "gender_dropdown" ).innerHTML = "Gender ("+ gendervar + ")";
		progressbar_update();
	}
	function github_mouse( show ) {
		if( show == true ) document.getElementById( "github_logo" ).style.filter = "brightness(0)";
		else document.getElementById( "github_logo" ).style.filter = "brightness(1)";
	}
	function event_navbar_buttons( buttonid, show ) {
		document.getElementById( "navbar_button_" + buttonid ).style.backgroundImage = ( show == true ) ? ("linear-gradient( #262626, #1A1A1A )") : ("linear-gradient( #80ccff, #0099ff )");
	}