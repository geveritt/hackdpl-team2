# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Location.create(:name=>'Main', :address=>'5201 Woodward Ave.', :phone=>'(313) 481-1300')
Location.create(:name=>'Bowen', :address=>'3648 W. Vernor', :phone=>'(313) 481-1540')
Location.create(:name=>'Hubbard', :address=>'12929 W. McNichols', :phone=>'(313) 481-1750')
Location.create(:name=>'Campbell', :address=>'8733 W. Vernor', :phone=>'(313) 481-1550')
Location.create(:name=>'Jefferson', :address=>'12350 E. Outer Dr.', :phone=>'(313) 481-1760')
Location.create(:name=>'Chandler Park', :address=>'12800 Harper', :phone=>'(313) 481-1560')
Location.create(:name=>'Knapp', :address=>'13330 Conant', :phone=>'(313) 481-1770')
Location.create(:name=>'Chaney', :address=>'16101 Grand River', :phone=>'(313) 481-1570')
Location.create(:name=>'Lincoln', :address=>'1221 E. 7 Mile Rd.', :phone=>'(313) 481-1780')
Location.create(:name=>'Chase', :address=>'17731 W. 7 Mile Rd.', :phone=>'(313) 481-1580')
Location.create(:name=>'Monteith', :address=>'14100 Kercheval', :phone=>'(313) 481-1800')
Location.create(:name=>'Conely', :address=>'4600 Martin', :phone=>'(313) 481-1590')
Location.create(:name=>'National Automotive History Collection', :address=>'121 Gratiot', :phone=>'(313) 481-1862')
Location.create(:name=>'Douglass', :address=>'3666 Grand River', :phone=>'(313) 481-1700')
Location.create(:name=>'Parkman', :address=>'1766 Oakman Blvd.', :phone=>'(313) 481-1810')
Location.create(:name=>'Duffield', :address=>'2507 W. Grand Blvd.', :phone=>'(313) 481-1710')
Location.create(:name=>'Redford', :address=>'21200 Grand River', :phone=>'(313) 481-1820')
Location.create(:name=>'Edison', :address=>'18400 Joy Rd.', :phone=>'(313) 481-1720')
Location.create(:name=>'Sherwood Forest', :address=>'7117 W. 7 Mile Rd.', :phone=>'(313) 481-1840')
Location.create(:name=>'Elmwood Park', :address=>'550 Chene', :phone=>'(313) 481-1732')
Location.create(:name=>'Skillman', :address=>'121 Gratiot', :phone=>'(313) 481-1850')
Location.create(:name=>'Franklin', :address=>'13651 E. McNichols', :phone=>'(313) 481-1740')
Location.create(:name=>'Wilder', :address=>'7140 E. 7 Mile Rd.', :phone=>'(313) 481-1870')

Service.create(:name=>"Hype Teen Center", :description=>'Branch:  Main Welcome to HYPE, the Detroit Public Library\'s Teen Center. What\'s the HYPE? HYPE stands for Helping Young People Excel. ')
Service.create(:name=>"Ask A Librarian", :description=>'Branch:  Main Ask-A-Librarian service is designed to provide brief, factual answers to your reference questions via e-mail or phone. ')
Service.create(:name=>"Detroit Reads!", :description=>'Branch:  Main  Learn to read or improve your reading skills. Join the Detroit Public Library’s literacy campaign Detroit Reads!')
Service.create(:name=>"Career and Employment services", :description=>'Branch:  Main Staff knowledgeable in career and employment issues is assigned full-time to the TLC Center at the Main Library to assist job seekers in choosing resources and identifying additional resources located throughout the Library system.')