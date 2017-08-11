class CookingTime::Scraper
  attr_accessor :name, :url

    @all_recipes = []

    def self.recipe
      @recipe = recipe.new

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
        if number < 25
        puts "#{number+1} – #{@all_recipes[number].name}"
      end
      end
    end

  
  end

  