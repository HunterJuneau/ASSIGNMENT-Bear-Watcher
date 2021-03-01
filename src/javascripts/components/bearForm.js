const bearForm = () => {
  $('#form').html(`<form>
                    <legend>New Bear Form</legend>
                    <div class="mb-3">
                      <label for="bearName" class="form-label">Name</label>
                      <input type="text" class="form-control" id="bearName">
                    </div>
                    <div class="mb-3">
                      <label for="bearImg" class="form-label">Image URL</label>
                      <input type="url" class="form-control" id="bearImg">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>`);
};

export default bearForm;
