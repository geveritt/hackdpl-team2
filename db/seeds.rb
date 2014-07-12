# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Location.create(:name=>'Main', :address=>'5201 Woodward Ave.', :phone=>'(313) 481-1300')
Location.create(:name=>'Bowen', :address=>'3648 W. Vernor', :phone=>'(313) 481-1540')
