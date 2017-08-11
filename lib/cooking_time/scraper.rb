class CookingTime::Scraper
  attr_accessor :name, :url

    @all_recipes = []

    def self.clear_all
      @all_recipes.clear
    end

    

    def self.scrape_recipes(time_select) 
      
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,#{time_select}.html")) 
      doc.css("td.af_baseS").each do |recipe_list|
        recipe = self.new
        recipe.name = recipe_list.search("a.br_textepetit").text.gsub("Recipe","")
        recipe.url = recipe_list.search("a").attr("href").text
        
        @all_recipes << recipe    

      end
      
    end

    def self.list_recipes
      @all_recipes.each_with_index do |name, number|
        puts "#{number+1} – #{@all_recipes[number].name}" if number < 75
      end
    end

    def self.show_recipe(choice)
      puts"here is your recipe ! #{choice}"

    end


  
  end

  