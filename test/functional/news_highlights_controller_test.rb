require 'test_helper'

class NewsHighlightsControllerTest < ActionController::TestCase
  setup do
    @news_highlight = news_highlights(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:news_highlights)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create news_highlight" do
    assert_difference('NewsHighlight.count') do
      post :create, news_highlight: { description: @news_highlight.description, title: @news_highlight.title }
    end

    assert_redirected_to news_highlight_path(assigns(:news_highlight))
  end

  test "should show news_highlight" do
    get :show, id: @news_highlight
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @news_highlight
    assert_response :success
  end

  test "should update news_highlight" do
    put :update, id: @news_highlight, news_highlight: { description: @news_highlight.description, title: @news_highlight.title }
    assert_redirected_to news_highlight_path(assigns(:news_highlight))
  end

  test "should destroy news_highlight" do
    assert_difference('NewsHighlight.count', -1) do
      delete :destroy, id: @news_highlight
    end

    assert_redirected_to news_highlights_path
  end
end
