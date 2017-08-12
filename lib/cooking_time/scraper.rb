class CookingTime::Scraper
  attr_accessor :list_name, :list_url, :name, :type, :prep_time, :ingredients, :instructions

    @all_recipes = []

    def self.clear_all
      @all_recipes.clear
    end

    def self.scrape_recipes(time_select) 
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,#{time_select}.html")) 
      doc.css("td.af_baseS").each do |recipe_list|
        list_recipe = self.new
        list_recipe.list_name = recipe_list.search("a.br_textepetit").text.gsub("Recipe","")
        list_recipe.list_url = recipe_list.search("a").attr("href").text 
        @all_recipes << list_recipe    
      end     
    end

    def self.list_recipes
      @all_recipes.each_with_index do |name, number|
        puts "#{number+1} – #{@all_recipes[number].list_name}" if number < 75
      end
    end

    def self.show_recipe(choice)
      recipe = self.new
      input = nil 
      @all_recipes.each_with_index do |name, number|
      if choice -1 == number
        doc = Nokogiri::HTML(open(@all_recipes[number].list_url)) 
        recipe.name = doc.search("span.fn").text
        recipe.type = doc.search("span.recipeType").text
        recipe.prep_time = doc.search("span.preptime").text
        recipe.ingredients = doc.search("span.ingredient").text.gsub("\r", ", ")
        recipe.instructions = doc.search("span.instructions").text.gsub("\r", " ")
        

        puts <<~DOC
        --#{recipe.name.upcase}-- 
        #{recipe.type}       
        
        #{recipe.prep_time}
        
        INGREDIENTS —  
        #{recipe.ingredients}
        

        INSTRUCTIONS —  
        #{recipe.instructions}


        Enter q to Quit - m for Main Menu

        DOC

        input = gets.strip
        if input == "q"
          puts "C-Ya!"
          exit
        elsif input == "m"
          CookingTime::CLI.new.welcome
        end
      end
     end
    end

  end

   