new DataTable('#example', {
    ajax: 'objects.txt', // Chama os dados .txt
    columns: [{
        data: 'name' // Mapeia a coluna 'Name' ao campo 'name'
      }, 
      {
        data: 'position' // Mapeia a coluna 'Position' ao campo 'position'
      }, 
      {
        data: 'office' // Mapeia a coluna 'Office' ao campo 'office'
      }, 
      {
        data: 'extn' // Mapeia a coluna 'Extn.' ao campo 'extn'
      }, 
      {
        data: 'start_date' // Mapeia a coluna 'Start date' ao campo 'start_date'
      }, 
      {
        data: 'salary' // Mapeia a coluna 'Salary' ao campo 'salary'
      } 
    ]
  });