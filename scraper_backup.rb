class CookingTime::Scraper
  attr_accessor :url, :name, :type, :prep_time, :ingredients, :instructions

    @all_recipes = []

    def self.clear_all
      @all_recipes.clear
    end

    

    def self.scrape_recipes(time_select) 
      
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,#{time_select}.html")) 
      doc.css("td.af_baseS").each do |recipe_list|
        recipe = self.new
        recipe.url = recipe_list.search("a").attr("href").text
        
        format_recipe = Nokogiri::HTML(open(recipe.url))
        
        
        recipe.name = format_recipe.search("span.fn").text
        recipe.type = format_recipe.search("span.recipeType").text
        recipe.prep_time = format_recipe.search("span.preptime").text
        recipe.ingredients = format_recipe.search("span.ingredient").text
        recipe.instructions = format_recipe.search("span.instructions").text
        
       
        @all_recipes << recipe    
      end    
      binding.pry 
    end

    def self.list_recipes
      @all_recipes.each_with_index do |name, number|
        puts "#{number+1} – #{@all_recipes[number].name}" if number < 75
      end
    end


        

     
  
  end

  