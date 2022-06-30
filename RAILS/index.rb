#esegui codice ruby con 'ruby <nome_file.rb>'

# HASH with { }
# coppia key-value
var2 = {
  "var3" => {
    "var4" => "chiave4"
  },
  "var5" => ["chivae5a","chiave5b","chiave5c"],
  "var6" => "chiave6"
}

person = {              # alternative form
  name: 'Gab',          # :name => "Gab",
  age: 27,              # :age => 27,
  handsome: true,       # :handsome => true,
  lang: %w[Ruby JS]     # :lang => ["Ruby", "JS"]
}

p person[:name] # access to an Hash { }

song = {
  length: 123,
  ui: "s",
  producer: "Zappa"
}

p song
p song[:ui]

#209 Classes - custom data container
# include variables (attributes)
# methods to interact with the object
# encapsulation..
# instantiation create an object from a class
# kind of a template
# difference object, same class

# 211 superclass / subclass / ancestor
p 5.class.ancestors #output [Integer, Numeric, Comparable, Object, Kernel, BasicObject]

#213
#class Animale
#  def camminare
#    p "sta camminando"
#  end
#end
#
#cane = Animale.new
#p cane.camminare
#p cane.camminare 


# 215..220 instance variable, instance methods, self keyword, getter methods, setter methods, add parameters to init methods
class Cane

  attr_accessor :age # 221 - shortcut acessor methods (read methods+write methods)
  #only read.. attr_reader:
  #only write.. attr_writer:

  def initialize(color)
      @name = "Cane-#{("A".."Z").to_a.sample}" #sambple = sandom array element
      @age = "#{rand(1..100)}"
      @color = color
  end
  def info
      "my #{@color} dog's name is #{@name}, #{self.class}, #{self.object_id}"
  end

  #read methods
  def color 
      @color 
  end

  #write methods
  def color=(new_color)
      @color = new_color
  end
end
lilly = Cane.new("lilly")
puts lilly.inspect
puts lilly.info 
p lilly.color
p lilly.color = "cod: 12green"
p lilly.color
billy = Cane.new("cod: 2black")
p billy.color
p billy.age #accessibile cause set as attr_accessor 