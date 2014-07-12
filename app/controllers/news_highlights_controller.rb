class NewsHighlightsController < ApplicationController
  # GET /news_highlights
  # GET /news_highlights.json
  def index
    @news_highlights = NewsHighlight.order("updated_at DESC").all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @news_highlights }
    end
  end

  # GET /news_highlights/1
  # GET /news_highlights/1.json
  def show
    @news_highlight = NewsHighlight.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @news_highlight }
    end
  end

  # GET /news_highlights/new
  # GET /news_highlights/new.json
  def new
    @news_highlight = NewsHighlight.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @news_highlight }
    end
  end

  # GET /news_highlights/1/edit
  def edit
    @news_highlight = NewsHighlight.find(params[:id])
  end

  # POST /news_highlights
  # POST /news_highlights.json
  def create
    @news_highlight = NewsHighlight.new(params[:news_highlight])

    respond_to do |format|
      if @news_highlight.save
        format.html { redirect_to @news_highlight, notice: 'News highlight was successfully created.' }
        format.json { render json: @news_highlight, status: :created, location: @news_highlight }
      else
        format.html { render action: "new" }
        format.json { render json: @news_highlight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /news_highlights/1
  # PUT /news_highlights/1.json
  def update
    @news_highlight = NewsHighlight.find(params[:id])

    respond_to do |format|
      if @news_highlight.update_attributes(params[:news_highlight])
        format.html { redirect_to @news_highlight, notice: 'News highlight was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @news_highlight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /news_highlights/1
  # DELETE /news_highlights/1.json
  def destroy
    @news_highlight = NewsHighlight.find(params[:id])
    @news_highlight.destroy

    respond_to do |format|
      format.html { redirect_to news_highlights_url }
      format.json { head :no_content }
    end
  end
end
